export const getHtml = (html64: string): string => /* html */`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kactuswow</title>
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
        ${atob(html64)}
        <script src="./index.js"></script>
    </body>
    </html>`
