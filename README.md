# CAT-Command-for-Windows
To make our command global

Write at the top of the script #!/usr/bin/env node 

in Package,json folder write
"bin": {
    "wcat": "script.js"
  },
  
  In terminal write
  npm link
 
 To remove our global command
  npm unlink
