import urllib.request

urls = [
  "https://en.wikipedia.org/wiki/Special:FilePath/Laxman_Jhula_Rishikesh.jpg?width=800",
  "https://en.wikipedia.org/wiki/Special:FilePath/Stone_Chariot_at_Vitthala_Temple_in_Hampi.jpg?width=800",
  "https://en.wikipedia.org/wiki/Special:FilePath/Araku_Valley.jpg?width=800",
  "https://en.wikipedia.org/wiki/Special:FilePath/Tirumala_090615.jpg?width=800",
  "https://en.wikipedia.org/wiki/Special:FilePath/Annamalaiyar_Temple_View.jpg?width=800",
  "https://en.wikipedia.org/wiki/Special:FilePath/Taj_Mahal_(Edited).jpeg?width=800",
  "https://en.wikipedia.org/wiki/Special:FilePath/Varanasi_Ghats_panorama.jpg?width=800"
]

for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print("OK: " + u)
    except Exception as e:
        print("FAIL: " + str(e) + " -> " + u)
