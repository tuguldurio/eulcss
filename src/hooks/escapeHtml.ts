export function escapeHtml(code: string) {
  let escaped = code.replaceAll('&', '&amp;')
  escaped = escaped.replaceAll('"', '&quot;')
  escaped = escaped.replaceAll('<', '&lt;')
  escaped = escaped.replaceAll('>', '&gt;')
  return escaped
}