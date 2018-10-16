<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Expediente clinico</title>
    <link href="css/plantilla.css" rel="stylesheet">
</head>
<body>
    @if(Auth::check())
        @if(Auth::user()->rol_id==1)
            <script>
                const user = {
                    id: "{{ Auth::user()->id }}",
                    usuario: "{{ Auth::user()->usuario }}",
                    rol_id: "{{ Auth::user()->rol_id }}"
                };
            </script>
        @endif
        <div id="app"></div>
        <script src="js/app.js"></script>
    @endif
</body>
</html>