Matfyzia Knižnička
==================

Adding new books
----------------

1. Add the metadata to `_data/books.yml`
    - come up with a unique short slug for each book
    - format:

      ```yaml
      slug:
        title: The Book's Title
        author: Some Name
        url: the book's website (not required)
        owner: your name
        why: A sentence or two explaining why you want people to read this book.
      ```

    - if necessary, add `name: email` to `_data/owners.yml`
2. (re)generate the QR codes and stick them on the books

    ```sh
    mkdir -p qrs && ./generate_qrcodes.py qrs  # requirements: pyyaml, pyqrcode, pypng
    for f in qrs/* ; do convert $f knizky-qrlogo.png -gravity center -composite $f.pdf ; done
     - OR -
    for f in qrs/* ; do convert $f $f.pdf ; done  # if you don't want the logo 
    pdfnup --a4paper --nup 9x6 --outfile qrs.pdf qrs/*.pdf  # or just the ones you want to print now
    lpr qrs.pdf
    #cut -d' ' qrs.pdf… ;)
    ```

3. commit, push and bring the books to the library!
