<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('real_estates', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('estate_id');
            $table->json('name');
            $table->boolean('featured')->default(false);
            $table->foreignId('area_id')->references('id')->on('areas')->onDelete('cascade');
            $table->foreignId('estate_type_id')->references('id')->on('estate_types')->onDelete('cascade');
            $table->double('price');
            $table->double('area_size');
            $table->string('year_built');
            $table->string('year_renovated')->nullable();
            $table->boolean('parking_available')->default(false);
            $table->integer('parking_spaces')->nullable();
            $table->integer('rooms')->nullable();
            $table->json('description')->nullable();
            $table->string('owner_name');
            $table->string('owner_contact');
            $table->string('address');
            $table->date('sold_at')->nullable();
            $table->json('coordinates');
            $table->integer('radius');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('real_estates');
    }
};
