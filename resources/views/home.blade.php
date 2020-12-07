@extends('layouts.app')

@section('content')
    @php
        $faker = \Faker\Factory::create("fa_IR");
        $name="حسین یغمایی";
        $about=$faker->realText(1000);
    @endphp
    <div class="container mt-5">
        <div class="row ">
            <div class="col-md-12">
                <div class="card border shadow">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h1 class="h1">سلام!</h1>
                                <p class="h4">
                                   خوش آمدید، من حسین یغمایی هستم.
                                </p>
                                <p class="h4">
                                    برنامه نویس و طراح وب سایت و نرم افزار های تحت وب.
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-8 col-sm-6">
                                        <div class="rounded-circle border w-100 bg-default p-3" >
                                            <img src="{{ asset("images/avatar.jpg") }}" alt="" class="w-100 rounded-circle  ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
