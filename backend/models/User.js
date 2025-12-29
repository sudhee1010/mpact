// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true
//     },

//     password: {
//       type: String,
//       required: true
//     },

//     role: {
//       type: String,
//       enum: ["customer", "admin"],
//       default: "customer"
//     },

//     isVerified: {
//       type: Boolean,
//       default: false
//     },

//     phone: {
//       type: String,
//       unique: true,
//       sparse: true
//     },

//     isPhoneVerified: {
//       type: Boolean,
//       default: false
//     },


//     otp: String,
//     otpExpiry: Date
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);



import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    //   name: {
    //   type: String,
    //   required: function () {
    //     return !!this.email;
    //   }
    // },

    email: {
      type: String,
      unique: true,
      sparse: true
    },

    phone: {
      type: String,
      unique: true,
      sparse: true,
      trim: true
    },

    password: {
      type: String,
      select: false
    },

    isEmailVerified: {
      type: Boolean,
      default: false
    },

    isPhoneVerified: {
      type: Boolean,
      default: false
    },

    otp: String,
    otpExpiry: Date,

    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer"
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

