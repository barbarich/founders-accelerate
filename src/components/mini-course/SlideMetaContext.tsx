import React, { createContext, useContext } from "react";

export type SlideMeta = {
  index: number;
  total: number;
  lesson: number;
};

const SlideMetaContext = createContext<SlideMeta>({ index: 1, total: 1, lesson: 1 });

export const SlideMetaProvider: React.FC<{ value: SlideMeta; children: React.ReactNode }> = ({ value, children }) => (
  <SlideMetaContext.Provider value={value}>{children}</SlideMetaContext.Provider>
);

export const useSlideMeta = (): SlideMeta => useContext(SlideMetaContext);