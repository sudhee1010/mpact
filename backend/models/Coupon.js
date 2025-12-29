import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true
    },

    discountType: {
      type: String,
      enum: ["percentage", "flat"],
      required: true
    },

    discountValue: {
      type: Number,
      required: true
    },

    expiryDate: {
      type: Date,
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    },

    // 🔥 PRODUCT-SPECIFIC RULES
    applicableProducts: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },

        usageLimit: {
          type: Number, // e.g. 50 users
          required: true
        },

        usedBy: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
          }
        ]
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Coupon", couponSchema);
