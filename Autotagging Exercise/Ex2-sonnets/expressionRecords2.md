# Expression Records

*CTRL+F*



Replaced: & with &amp;
Replaced: < with &lt;
Replaced: > with &gt;

Find: `^\s\s`
Replaced with: 

```
Find: ^\s*([IVXXLC]+)$
Replace with: </sonnet><sonnet n="\1">
```
*Manually cleaned up the first and last tags.*
```
Find: ^[^<]+?$
Replace with: <line>\0</line>

*Dot matches all
Find:.+
Replace with: <root>\0</root>
```
*Manually fixed the start of foot tag and added a header and author tag*
*Pretty printed the xml file*