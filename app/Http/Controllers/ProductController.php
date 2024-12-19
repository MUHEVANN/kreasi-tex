<?php

namespace App\Http\Controllers;

use App\Http\Requests\BahanRequest;
use App\Http\Requests\ProductRequest;
use App\Models\Bahan;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Product/ProductIndex');
    }

    public function create()
    {
        return Inertia::render('Product/ProductCreate');
    }

    public function edit(Product $product)
    {
        return Inertia::render('Product/ProductEdit', ['product' => $product]);
    }

    //
    public function store(ProductRequest $req)
    {
        $path = $req['gambar']->store('product', 'public');
        $isView = filter_var($req->input('is_view'), FILTER_VALIDATE_BOOLEAN);

        $data = Product::create([
            'nama' => $req['nama'],
            'gambar' => $path,
            'is_view' => $isView,
            'count_star' => $req['count_star'],
            'deskripsi' => $req['deskripsi'],
            'harga' => $req['harga'],
            'bahan_id' => $req['bahan_id'],
        ]);

        return $this->res('Product created successfully', 201, $data);
    }

    public function update(ProductRequest $req, Product $product)
    {
        $path = $product->gambar;
        $isView = filter_var($req->input('is_view'), FILTER_VALIDATE_BOOLEAN);

        if ($req['gambar']) {
            unlink(public_path('storage/' . $path));
            $path = $req['profile']->store('product', 'public');
        }


        $data = $product->update([
            'nama' => $req['nama'],
            'gambar' => $path,
            'is_view' => $isView,
            'count_star' => $req['count_star'],
            'deskripsi' => $req['deskripsi'],
            'harga' => $req['harga'],
            'bahan_id' => $req['bahan_id'],
        ]);

        return $this->res('Product updated successfully', 200, $data);
    }

    public function delete(Product $product)
    {
        unlink(public_path('storage/' . $product->gambar));
        $product->delete();

        return $this->res('Product deleted successfully', 200, $product);
    }

    public function getProduct()
    {
        $product = Product::join("bahans", "bahans.id", "=", "products.bahan_id")->orderBy('is_view', 'desc')
            ->select("products.*", "bahans.nama as bahan_nama")
            ->get();

        return $this->res('Product fetched successfully', 200, $product);
    }

    public function getProductByCategory(int $id, Request $request)
    {
        $page = $request->input('page', 1);
        $size = $request->input('size', 6);
        $product = Product::join("bahans", "bahans.id", "=", "products.bahan_id")
            ->where("products.bahan_id", $id)
            ->select("products.*", "bahans.nama as bahan_nama")
            ->paginate($size, ["*"], 'page', $page);

        return $this->res("OK", 200, $product);
    }

    public function getProductView()
    {
        $product = Product::where('is_view', true)->limit(4)->get();
        return $this->res("OK", 200, $product);
    }
}
