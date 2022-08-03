const MainContainer = ({ children }) => {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-slate-400">
      {children}
    </div>
  );
};
export default MainContainer;
