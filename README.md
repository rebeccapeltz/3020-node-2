# WATS 3020 Skills 2

## Object, Arrays, Functions

### io Module

**Set the prompt text:** 
io.terminal.setPrompt(<prompt text>)

**Display the prompt:**
io.terminal.prompt() returns a string

**Set up call back to read user input**
io.terminal.on('line', function(response) {
  //do something with response string
})

**Set up call back to do something when terminal closes
  - exit 0 is default
  - exit 1 indicates error
io.terminal.on('close', function()
{
  console.log(`closing'`)
  process.exit();  
});
