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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("bahan_id");
            $table->foreign("bahan_id")->references("id")->on("bahans")->onDelete("cascade");
            $table->string("nama");
            $table->text("deskripsi");
            $table->string("gambar");
            $table->string("harga");
            $table->boolean("is_view");
            $table->string("count_star");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
