---
---
window.owners = {
  {% for person in site.data.owners %}
  "{{person[0]}}": "{{person[1]}}",
  {% endfor %}
  "_": ""
}
