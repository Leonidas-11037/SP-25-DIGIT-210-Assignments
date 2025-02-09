# Expression Records

*CTRL+F*



Replaced: & with &amp;
Replaced: < with &lt;
Replaced: > with &gt;

```
Find: \n{3,}
Replace with:\n\n

Find: \n{2}
Replace with: </p>\n<p>
```
*Cleaned up stray tags*
```
*Dot Matches All*
Find: <p>([IVXLC]+\..+?)</p>$
Replace with: <chapter>\1</chapter>

*Dot Matches All*
Find: .+
Replace with: <root>\0</root>
```
*Put "root start tag past the encoding line*

```
Find: "(.+?)"
Replace with: <q>\1</q>
```

