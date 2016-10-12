<!doctype html>
<html>
<head>
    @include('includes.head')
</head>
<body>

<main>
    <div class="flex-center position-ref full-height">
        @include('includes.header')

        @yield('content')
    </div>
</main>

<footer>
    @include('includes.footer')
</footer>

<div class="clearfix"></div>

@include('includes.foot')

@yield('scripts')
</body>
</html>