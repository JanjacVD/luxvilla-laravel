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
            $table->double('price')->nullable();
            $table->double('area_size')->nullable();
            $table->string('year_built')->nullable();
            $table->string('year_renovated')->nullable();
            $table->boolean('parking_available')->default(false);
            $table->integer('parking_spaces')->nullable();
            $table->integer('rooms')->nullable();
            $table->json('description')->nullable();
            $table->string('owner_name')->nullable();
            $table->string('owner_contact')->nullable();
            $table->string('address')->nullable();
            $table->date('sold_at')->nullable();
            $table->json('coordinates')->nullable();
            $table->integer('radius')->nullable();
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
