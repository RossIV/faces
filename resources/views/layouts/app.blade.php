@include('includes.head')
<body>
    <div id="app">
        @include('includes.header')
        <main role="main">
            <router-view></router-view>
        </main>
        @include('includes.footer')
    </div>
</body>
@include('includes.foot')