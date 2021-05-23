<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->unsignedBigInteger('supplier_id');
            $table->string('bill');
            $table->string('model');
            $table->string('description');
            $table->string('size');
            $table->string('color');
            $table->string('material');
            $table->string('group');
            $table->integer('cost');
            $table->integer('value');
            $table->integer('minimum_value');
            $table->foreign('supplier_id')->references('id')->on('suppliers');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
