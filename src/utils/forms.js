// Shared helpers for the website's public forms (contact + newsletter).

export const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

// The API wraps every answer as { data: { responseCode, message, ...payload } }.
// 100 = success, 138 = created.
const OK_CODES = [100, 138];

/**
 * Turns an APIRequest result into one of:
 *   { status: "ok", message }          the server accepted it
 *   { status: "invalid", message }     the server rejected the input
 *   { status: "unreachable" }          no usable answer (offline / API down)
 */
export function readApiResult(res) {
  const data = res && res.data;
  if (!data || typeof data.responseCode === "undefined") return { status: "unreachable" };
  if (OK_CODES.includes(data.responseCode)) return { status: "ok", message: data.message || "" };
  const fieldErrors = data.errors && typeof data.errors === "object" ? Object.values(data.errors).join(" ") : "";
  return { status: "invalid", message: fieldErrors || data.message || "Something went wrong. Please try again." };
}
