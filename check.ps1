$urls = @(
  "https://upload.wikimedia.org/wikipedia/commons/e/eb/Rishikesh_view.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Stone_Chariot_at_Vitthala_Temple_in_Hampi.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Araku_Valley_landscape.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/75/Annamalaiyar_Temple_View.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rishikesh_panorama.jpg/800px-Rishikesh_panorama.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Araku_Valley.jpg/800px-Araku_Valley.jpg"
)
foreach ($u in $urls) {
  try {
    $req = [System.Net.WebRequest]::Create($u)
    $req.Method = "HEAD"
    $res = $req.GetResponse()
    Write-Output "OK: $u"
  } catch {
    Write-Output "FAIL: $u"
  }
}
