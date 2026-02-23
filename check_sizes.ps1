$files = Get-ChildItem "d:\MES_PROJETS\PROJETS WEB\PORTFOLIO_LOUTALADIO_Danick_Arcel\Media" -File | Where-Object { $_.Length -gt 200KB } | Sort-Object Length -Descending

foreach ($file in $files) {
    $sizeKB = [math]::Round($file.Length / 1024, 2)
    Write-Host "$($file.Name): $sizeKB KB"
}