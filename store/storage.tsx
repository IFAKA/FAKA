"use client";

import { atomWithStorage } from "jotai/utils";

export const isStyledAtom = atomWithStorage("isStyled", false);
