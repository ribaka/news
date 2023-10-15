<?php

namespace App\Http\Controllers;

use App\Models\Followers;
use App\Models\User;
use Illuminate\Http\Request;
use Laracasts\Flash\Flash;

class FollowersController extends Controller
{
    public function store(User $user)
    {
        Followers::create([
            'following' => getLogInUserId(),
            'followers' => $user->id,
        ]);
        Flash::success(__('messages.placeholder.User_profile_updated_successfully'));

        return redirect(route('userDetails', $user->id));
    }
    
    public function unFollow(User $user)
    {
        $following = Followers::whereFollowing(getLogInUserId())->whereFollowers($user->id)->delete();
        
        Flash::success(__('messages.placeholder.User_profile_updated_successfully'));

        return redirect(route('userDetails', $user->id));
    }
}
