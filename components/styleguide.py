@app.get("/styleguide", response_class=HTMLResponse)
async def styleguide(request: Request):
    return templates.TemplateResponse("templates/styleguide.html", {"request": request})

# or

@route.get("/styleguide", response_class=HTMLResponse)
async def styleguide(request: Request):
    return templates.TemplateResponse("templates/styleguide.html", {"request": request})
