<template>
 <section className="w-auto flex flex-row h-screen">
  <div className="flex flex-col w-1/2 bg-slate-100 h-auto m-2">
   <div className="flex flex-col items-start justify-center py-4">
    <img src="./assets/image 30.png" />
   </div>
   <div className="items-center justify-center">
    <img src="./assets/image 31.png" />
   </div>
   <h1 className="text-4xl text-center font-extrabold pt-3">Team Achieve</h1>
   <h2 className="text-3xl text-center font-bold pt-3">
    Your Perfect Solution for funding your desires
   </h2>
  </div>
  <div className="flex flex-col w-1/2 bg-slate-200 h-auto">
   <div className="flex flex-col items-center justify-normal pt-20">
    <h1 className="text-4xl text-center font-extrabold pt-3">Welcome Back</h1>
    <h2 className="text-2xl text-center font-semibold pt-3 px-auto">
     Enter your email and password to access your account
    </h2>
   </div>
   <div className="flex flex-col items-start justify-center w-full  pt-10">
    <form action="#" className="w-full justify-evenly h-auto">
     <div className="flex flex-col items-start justify-center w-full mt-5">
      <label for="email" className="text-2xl">Email Address *</label>
      <input
       type="text"
       placeholder="Enter your email"
       className="w-full h-8"
      />
     </div>
     <div className="flex flex-col items-start justify-center w-full mt-5">
      <label for="password" className="text-2xl">Password *</label>
      <input
       type="text"
       placeholder="Enter your password"
       className="w-full h-8"
      />
     </div>
    </form>
   </div>
   <div className="w-full flex flex-col items-center justify-end pt-36">
    <button
     className="bg-fuchsia-900 text-white w-full text-2xl t font-bold rounded-md"
    >
     Submit
    </button>
    <h1 className="text-xl font-semibold text-center">
     Don't have an account? <span>Sign Up </span>
    </h1>
   </div>
  </div>
 </section>
</template>

<!-- <style scoped>
.logo {
 height: 6em;
 padding: 1.5em;
 will-change: filter;
 transition: filter 300ms;
}
.logo:hover {
 filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
 filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
