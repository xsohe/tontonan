<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "user_id",
        "subscription_plan_id",
        "price",
        "payment_status",
        "expired_date",
        "snap_token"
    ];

    public function subscriptionPlan(): BelongsTo {
        return $this->belongsTo(SubscriptionPlan::class);
    }
}
