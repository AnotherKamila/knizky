#!/usr/bin/env python3

import os, sys
import pyqrcode, yaml

BASEURL = "http://knizky.cf/#"
OUT_DIR = sys.argv[1] if len(sys.argv) > 1 else '.'

books = yaml.load(open("_data/books.yml", "r"))
for book in books:
    qr = pyqrcode.create(BASEURL + book)
    qr.png(os.path.join(OUT_DIR, book + ".png"), scale=10)
