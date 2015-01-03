#!/usr/bin/env python3

import os, sys
import qrcode, yaml

BASEURL = "http://knizky.cf/#"
OUT_DIR = sys.argv[1] if len(sys.argv) > 1 else '.'

books = yaml.load(open("_data/books.yml", "r"))
for book in books:
    qr = qrcode.make(BASEURL + book)
    qr.save(os.path.join(OUT_DIR, "qr_" + book + ".png"))
