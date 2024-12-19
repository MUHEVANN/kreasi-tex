<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('funfacts', function (Blueprint $table) {
            $table->id();
            $table->text("title1");
            $table->text("title2");
            $table->text("text1");
            $table->text("text2");
            $table->string("link_instagram");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('funfacts');
    }
};
