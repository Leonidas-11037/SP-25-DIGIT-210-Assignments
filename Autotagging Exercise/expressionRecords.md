# Expression Records

*CTRL+F*


```
Replaced: & with &amp;
Replaced: < with &lt;
Replaced: > with &gt;
```

*Realized the last two undid the encoding line and undid that*


```
Find: "^.+"
Replace with: <movie>\0</movie>
```

*Messed up encoding line again and manually fixed it again.*

```
Find: (<movie>)(.+?)(\t)
Replace with: \1<title>\2</title>\3

Find: (</title>)(.+?)(\t)
Replace with: \1<year>\2</year>\3

Find: (</year>)(.+?)(\t)
Replace with: \1<country>\2</country>\3

Find: (</country>)(\d)(\s)([A-z]+)(</movie)
Replace with: \1<runtime> unit="\3">\2</runtime>\4
```


*Manually created the root element*
*Pretty printed the text*
