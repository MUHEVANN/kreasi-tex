<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request['email'])->first();

        if ($user && Hash::check($request['password'], $user->password)) {
            Auth::login($user);
            return response()->json([
                'message' => 'Login Success',
                'status' => 200,
                'data' => $user,
                'token' => $user->createToken('token')->plainTextToken
            ]);
        }

        return $this->res('Login Failed', 401);
    }
}
