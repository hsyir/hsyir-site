@extends('layouts.app')

@section('content')
    <div class="container mt-5">
        <div class="row ">
            <div class="col-md-12">
                <div class="card border shadow">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">

                                <div class="row">
                                    <div class="col-md-12">

                                        <h1 class="h1">سلام!</h1>
                                    </div>
                                    <div class="col-md-12">

                                        <p class="h4">
                                            خوش آمدید، من حسین یغمایی هستم.
                                        </p>
                                    </div>
                                    <div class="col-md-12">

                                        <p class="h5">
                                            برنامه نویس و طراح وب سایت و نرم افزار های تحت وب.
                                        </p>
                                    </div>
                                    <div class="col-md-12 mb-3 mt-5">
                                        <strong>شماره تلفن و واتساپ: <a  href="tel:09370331680"
                                                                        class="btn btn-outline-primary btn-sm">09370331680</a></strong>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <strong>تلگرام: <a target="_blank" href="https://t.me/hsy1985"
                                                           class="btn btn-outline-primary btn-sm">hsy1985</a></strong>
                                    </div>
                                    <div class="col-md-12  mb-3">
                                        <strong>اینستاگرام:
                                            <span class="d-none d-md-inline-block">
                                                <a target="_blank" href="http://instagram.com/_u/hossein.yaghmaee1985"
                                                   class="btn btn-sm btn-outline-primary">Hossein.Yaghmaee1985</a>
                                            </span>
                                            <span class="d-md-none">
                                                <a target="_blank" href="instagram://user?username=hossein.yaghmaee1985"
                                                   class="btn btn-sm btn-outline-primary">Hossein.Yaghmaee1985
                                                </a>
                                            </span>
                                        </strong>
                                    </div>

                                    <div class="col-md-12 mb-3">
                                        <strong>گیت هاب: <a target="_blank" href="https://github.com/hsyir"
                                                            class="btn btn-outline-primary btn-sm">github.com/hsyir</a></strong>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-8 col-sm-6">
                                        <div class="rounded-circle border w-100 bg-default p-3">
                                            <img src="{{ asset("images/avatar.jpg") }}" alt=""
                                                 class="w-100 rounded-circle  ">
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
