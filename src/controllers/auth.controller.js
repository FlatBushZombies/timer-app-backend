import { sql } from "#config/database.js"

export const register = async (req, res, next) => {
  try {
    const { userId, email, username, full_name, avatar_url } = req.body

    if (!userId || !email) {
      return res.status(400).json({ error: "userId and email are required" })
    }

    const query = `
      INSERT INTO users (id, email, username, full_name, avatar_url)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        username = EXCLUDED.username,
        full_name = EXCLUDED.full_name,
        avatar_url = EXCLUDED.avatar_url,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `

    const rows = await sql(query, [
      userId,
      email,
      username,
      full_name,
      avatar_url,
    ])

    res.status(201).json({
      message: "User registered successfully",
      user: rows[0],
    })
  } catch (error) {
    console.error("Register Error:", error)
    next(error)
  }
}

export const logout = async (req, res, next) => {
  try {
    res.json({ message: "Logged out successfully" })
  } catch (error) {
    console.error("Logout Error:", error)
    next(error)
  }
}
