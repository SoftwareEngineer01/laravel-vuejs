<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoryEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventory_entries', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('inventory_type_id');
            $table->string('bill');
            $table->unsignedBigInteger('inventory_id');
            $table->integer('entries');
            $table->integer('cost');
            $table->foreign('inventory_type_id')->references('id')->on('inventory_types');
            $table->foreign('inventory_id')->references('id')->on('inventories');
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
        Schema::dropIfExists('inventory_entries');
    }
}
