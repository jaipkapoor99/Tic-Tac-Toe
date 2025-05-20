$tailwindPath = Join-Path -Path $PSScriptRoot -ChildPath "node_modules\.bin\tailwindcss.cmd"
if (Test-Path $tailwindPath) {
    & $tailwindPath -i "./input.css" -o "./style.css" --watch
} else {
    Write-Error "Could not find Tailwind CSS at: $tailwindPath"
}
