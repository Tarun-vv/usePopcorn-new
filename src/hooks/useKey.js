import { useEffect } from "react";

export function useKey(code, action) {
  useEffect(
    function () {
      document.addEventListener("keydown", function (e) {
        if (e.code === code) {
          action();
        }
      });

      return function () {
        document.removeEventListener("keydown", function (e) {
          if (e.code === code) {
            action();
          }
        });
      };
    },
    [action, code]
  );
}
