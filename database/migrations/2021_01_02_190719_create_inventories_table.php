<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->unsignedBigInteger('inventory_type_id');
            $table->unsignedBigInteger('supplier_id');
            $table->string('bill');
            $table->string('model');
            $table->string('description');
            $table->string('size');
            $table->string('color');
            $table->string('material');
            $table->string('group');
            $table->integer('units');
            $table->integer('final_units');
            $table->integer('outputs');
            $table->integer('cost');
            $table->integer('value');
            $table->integer('minimum_value');
            $table->foreign('inventory_type_id')->references('id')->on('inventory_types');
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
        Schema::dropIfExists('inventories');
    }
}
