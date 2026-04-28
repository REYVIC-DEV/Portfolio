export const Home = () => {
  return (
    <div className="py-[32px] flex flex-col gap-[48px]">
      <small className="text-primary! font-body tracking-[3.6px] text-[12px]">
        FULL STACK DEVELOPER
      </small>
      <h1 className="font-headline text-[60px] lg:text-[128px] font-bold text-white wrap-break-word leading-15 lg:leading-35">
        Engineering <span className="text-primary">Robust</span> & Scalable
        Systems.
      </h1>
      <div className="py-[16px] flex flex-col lg:flex-row lg:items-center gap-[16px]">
        <img
          src="/assets/img/pfp.png"
          alt="pfp image"
          className="size-[128px] object-cover [image-rendering:smooth] transform-gpu"
        />
        <p className="font-body leading-[32.5px] tracking-normal text-[20px] text-[#94A3B8] lg:max-w-[65%]">
          Specializing in building scalable backend architectures and robust
          integrations where technical precision meets system efficiency. Engineering
          the digital infrastructure of tomorrow with intentionality.
        </p>
      </div>
    </div>
  );
};
