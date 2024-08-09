(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [358],
  {
    29450: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 74541));
    },
    79055: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return l;
        },
      });
      var a = r(57437);
      r(2265);
      var s = r(12218),
        n = r(49354);
      let i = (0, s.j)(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
              outline: "text-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function l(e) {
        let { className: t, variant: r, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, n.cn)(i({ variant: r }), t),
          ...s,
        });
      }
    },
    89733: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return d;
        },
      });
      var a = r(57437),
        s = r(2265),
        n = r(71538),
        i = r(12218),
        l = r(49354);
      let o = (0, i.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        d = s.forwardRef((e, t) => {
          let { className: r, variant: s, size: i, asChild: d = !1, ...c } = e,
            u = d ? n.g7 : "button";
          return (0, a.jsx)(u, {
            className: (0, l.cn)(o({ variant: s, size: i, className: r })),
            ref: t,
            ...c,
          });
        });
      d.displayName = "Button";
    },
    74541: function (e, t, r) {
      "use strict";
      r.d(t, {
        Calculator: function () {
          return eC;
        },
      });
      var a = r(57437),
        s = r(2265);
      let n = (e, t) => (
          (e *= Math.pow(10, t)), (e = Math.round(e) / Math.pow(10, t))
        ),
        i = (e) => {
          let t = [],
            r = 0,
            a = 0,
            s = 0,
            n = 0;
          for (
            var i = e.principal, o = 0, d = 0, c = 0, u = 0, m = 0, f = 1;
            f < e.calculationYears + 1;
            f++
          ) {
            let x = l(
              f,
              i,
              e.dividend.yield,
              e.dividend.frequency,
              e.dividend.taxRate,
              e.dividend.reinvest,
              e.annualPriceAppreciation,
              e.contribution.annual,
              e.contribution.frequency,
              e.principal
            );
            (o += x.dividends),
              (d += x.contribution),
              (c += x.growth),
              (u += x.dividendsTax),
              (i = x.newBalance),
              (x.cumulativeContributions = d),
              (x.cumulativeDividends = o),
              (x.cumulativeGrowth = c),
              (x.cumulativeTax = u),
              (a += x.contribution),
              (r += x.dividends),
              (s += x.growth),
              (n += x.dividendsTax),
              (m += x.returnPercent),
              t.push(x);
          }
          return {
            calculationYears: e.calculationYears,
            principal: e.principal,
            finalBalance: e.principal + a + r + s - n,
            totalDividends: r,
            totalContributions: a,
            totalGrowth: s,
            totalTax: n,
            averageAnnualReturnPercent: m / e.calculationYears,
            totalReturnPercent: (r + s - n) / (e.principal + a),
            yearlyResults: t,
          };
        },
        l = (e, t, r, a, s, i, l, o, d, c) => {
          var u = t;
          let m = r / 100 / a,
            f = (u * l) / 100 / 12,
            x = s / 100,
            h = o / d;
          for (var p = 0, j = 0, g = 0, b = 0, v = 1; v <= 12; ++v) {
            let e =
                (1 == a && 12 == v) ||
                (2 == a && (6 == v || 12 == v)) ||
                (4 == a && (3 == v || 6 == v || 9 == v || 12 == v)) ||
                12 == a,
              t =
                (1 == d && 12 == v) ||
                (2 == d && (6 == v || 12 == v)) ||
                (4 == d && (3 == v || 6 == v || 9 == v || 12 == v)) ||
                12 == d
                  ? h
                  : 0;
            u += t + f;
            let r = e ? u * m : 0,
              s = r * x;
            i ? (u += r - s) : (u -= s), (p += r), (j += s), (g += t);
          }
          return (
            (b += (t * l) / 100),
            {
              year: e,
              startingBalance: t,
              dividends: n(p, 2),
              dividendsTax: n(j, 2),
              growth: n(b, 2),
              contribution: n(g, 2),
              newBalance: u,
              returns: n(p + b - j, 2),
              yields: 0,
              cumulativeContributions: 0,
              cumulativeDividends: 0,
              cumulativeGrowth: 0,
              cumulativeTax: 0,
              principal: c,
              averageMonthlyDividend: p / 12,
              returnPercent: (p + b - j) / t,
            }
          );
        },
        o = {
          principal: 1e4,
          calculationYears: 30,
          contribution: { annual: 1200, frequency: 12 },
          annualPriceAppreciation: 3,
          dividend: { yield: 4, frequency: 4, taxRate: 15, reinvest: !0 },
        },
        d = (e, t) => {
          let [r, a] = (0, s.useState)(e);
          return (
            (0, s.useEffect)(() => {
              let r = setTimeout(() => {
                a(e);
              }, t);
              return () => {
                clearTimeout(r);
              };
            }, [e, t]),
            r
          );
        };
      var c = r(53782),
        u = r(49354);
      let m = s.forwardRef((e, t) => {
        let { className: r, type: s, ...n } = e;
        return (0, a.jsx)("input", {
          type: s,
          className: (0, u.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...n,
        });
      });
      m.displayName = "Input";
      var f = r(53267),
        x = r(42421),
        h = r(14392),
        p = r(22468);
      let j = f.fC;
      f.ZA;
      let g = f.B4,
        b = s.forwardRef((e, t) => {
          let { className: r, children: s, ...n } = e;
          return (0, a.jsxs)(f.xz, {
            ref: t,
            className: (0, u.cn)(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              r
            ),
            ...n,
            children: [
              s,
              (0, a.jsx)(f.JO, {
                asChild: !0,
                children: (0, a.jsx)(x.Z, { className: "h-4 w-4 opacity-50" }),
              }),
            ],
          });
        });
      b.displayName = f.xz.displayName;
      let v = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(f.u_, {
          ref: t,
          className: (0, u.cn)(
            "flex cursor-default items-center justify-center py-1",
            r
          ),
          ...s,
          children: (0, a.jsx)(h.Z, { className: "h-4 w-4" }),
        });
      });
      v.displayName = f.u_.displayName;
      let y = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(f.$G, {
          ref: t,
          className: (0, u.cn)(
            "flex cursor-default items-center justify-center py-1",
            r
          ),
          ...s,
          children: (0, a.jsx)(x.Z, { className: "h-4 w-4" }),
        });
      });
      y.displayName = f.$G.displayName;
      let N = s.forwardRef((e, t) => {
        let { className: r, children: s, position: n = "popper", ...i } = e;
        return (0, a.jsx)(f.h_, {
          children: (0, a.jsxs)(f.VY, {
            ref: t,
            className: (0, u.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === n &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              r
            ),
            position: n,
            ...i,
            children: [
              (0, a.jsx)(v, {}),
              (0, a.jsx)(f.l_, {
                className: (0, u.cn)(
                  "p-1",
                  "popper" === n &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: s,
              }),
              (0, a.jsx)(y, {}),
            ],
          }),
        });
      });
      (N.displayName = f.VY.displayName),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(f.__, {
            ref: t,
            className: (0, u.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", r),
            ...s,
          });
        }).displayName = f.__.displayName);
      let w = s.forwardRef((e, t) => {
        let { className: r, children: s, ...n } = e;
        return (0, a.jsxs)(f.ck, {
          ref: t,
          className: (0, u.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            r
          ),
          ...n,
          children: [
            (0, a.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, a.jsx)(f.wU, {
                children: (0, a.jsx)(p.Z, { className: "h-4 w-4" }),
              }),
            }),
            (0, a.jsx)(f.eT, { children: s }),
          ],
        });
      });
      (w.displayName = f.ck.displayName),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(f.Z0, {
            ref: t,
            className: (0, u.cn)("-mx-1 my-1 h-px bg-muted", r),
            ...s,
          });
        }).displayName = f.Z0.displayName);
      var k = r(39343),
        q = r(59772),
        C = r(31014),
        R = r(71538),
        S = r(38364);
      let F = (0, r(12218).j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        z = s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)(S.f, {
            ref: t,
            className: (0, u.cn)(F(), r),
            ...s,
          });
        });
      z.displayName = S.f.displayName;
      let T = k.RV,
        M = s.createContext({}),
        P = (e) => {
          let { ...t } = e;
          return (0, a.jsx)(M.Provider, {
            value: { name: t.name },
            children: (0, a.jsx)(k.Qr, { ...t }),
          });
        },
        W = () => {
          let e = s.useContext(M),
            t = s.useContext(D),
            { getFieldState: r, formState: a } = (0, k.Gc)(),
            n = r(e.name, a);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: i } = t;
          return {
            id: i,
            name: e.name,
            formItemId: "".concat(i, "-form-item"),
            formDescriptionId: "".concat(i, "-form-item-description"),
            formMessageId: "".concat(i, "-form-item-message"),
            ...n,
          };
        },
        D = s.createContext({}),
        Z = s.forwardRef((e, t) => {
          let { className: r, ...n } = e,
            i = s.useId();
          return (0, a.jsx)(D.Provider, {
            value: { id: i },
            children: (0, a.jsx)("div", {
              ref: t,
              className: (0, u.cn)("space-y-2", r),
              ...n,
            }),
          });
        });
      Z.displayName = "FormItem";
      let _ = s.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { error: n, formItemId: i } = W();
        return (0, a.jsx)(z, {
          ref: t,
          className: (0, u.cn)(n && "text-destructive", r),
          htmlFor: i,
          ...s,
        });
      });
      _.displayName = "FormLabel";
      let B = s.forwardRef((e, t) => {
        let { ...r } = e,
          {
            error: s,
            formItemId: n,
            formDescriptionId: i,
            formMessageId: l,
          } = W();
        return (0, a.jsx)(R.g7, {
          ref: t,
          id: n,
          "aria-describedby": s ? "".concat(i, " ").concat(l) : "".concat(i),
          "aria-invalid": !!s,
          ...r,
        });
      });
      B.displayName = "FormControl";
      let Y = s.forwardRef((e, t) => {
        let { className: r, ...s } = e,
          { formDescriptionId: n } = W();
        return (0, a.jsx)("p", {
          ref: t,
          id: n,
          className: (0, u.cn)("text-sm text-muted-foreground", r),
          ...s,
        });
      });
      Y.displayName = "FormDescription";
      let I = s.forwardRef((e, t) => {
        let { className: r, children: s, ...n } = e,
          { error: i, formMessageId: l } = W(),
          o = i ? String(null == i ? void 0 : i.message) : s;
        return o
          ? (0, a.jsx)("p", {
              ref: t,
              id: l,
              className: (0, u.cn)("text-sm font-medium text-destructive", r),
              ...n,
              children: o,
            })
          : null;
      });
      I.displayName = "FormMessage";
      let L = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, u.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            r
          ),
          ...s,
        });
      });
      L.displayName = "Card";
      let V = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, u.cn)("flex flex-col space-y-1.5 p-6", r),
          ...s,
        });
      });
      V.displayName = "CardHeader";
      let O = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("h3", {
          ref: t,
          className: (0, u.cn)(
            "text-2xl font-semibold leading-none tracking-tight",
            r
          ),
          ...s,
        });
      });
      O.displayName = "CardTitle";
      let A = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("p", {
          ref: t,
          className: (0, u.cn)("text-sm text-muted-foreground", r),
          ...s,
        });
      });
      A.displayName = "CardDescription";
      let G = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, u.cn)("p-6 pt-0", r),
          ...s,
        });
      });
      (G.displayName = "CardContent"),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, u.cn)("flex items-center p-6 pt-0", r),
            ...s,
          });
        }).displayName = "CardFooter");
      var E = r(30690),
        H = r(9646);
      let U = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)(H.fC, {
          className: (0, u.cn)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
            r
          ),
          ...s,
          ref: t,
          children: (0, a.jsx)(H.bU, {
            className: (0, u.cn)(
              "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
            ),
          }),
        });
      });
      U.displayName = H.fC.displayName;
      var J = r(79055),
        K = r(43649),
        X = r(18087);
      let $ = q.z.object({
          principal: q.z.coerce
            .number()
            .positive()
            .min(0, "Must be 0 or more")
            .max(999999999, "Must be 999999999 or less"),
          contribution: q.z.object({
            annual: q.z.coerce
              .number()
              .positive()
              .min(-999999999, "Must be 1 or more")
              .max(999999999, "Must be 999999999 or less"),
            frequency: q.z.coerce
              .number()
              .positive()
              .min(1, "Must be 1 or more")
              .max(12, "Must be 12 or less"),
          }),
          dividend: q.z.object({
            yield: q.z.coerce
              .number()
              .positive()
              .min(0, "Must be 0 or more")
              .max(999999999, "Must be 999999999 or less"),
            frequency: q.z.coerce
              .number()
              .positive()
              .min(1, "Must be 1 or more")
              .max(12, "Must be 12 or less"),
            taxRate: q.z.coerce
              .number()
              .positive()
              .min(0, "Must be 0 or more")
              .max(100, "Must be 100 or less"),
            reinvest: q.z.coerce.boolean(),
          }),
          annualPriceAppreciation: q.z.coerce
            .number()
            .positive()
            .min(-100, "Must be 0 or more")
            .max(100, "Must be 100 or less"),
          calculationYears: q.z.coerce
            .number()
            .positive()
            .min(1, "Must be 1 or more")
            .max(200, "Must be 200 or less"),
        }),
        Q = (e) => {
          let { params: t, setParams: r } = e,
            s = (0, X.useTranslations)("Calculator"),
            n = (0, k.cI)({
              resolver: (0, C.F)($),
              mode: "onBlur",
              defaultValues: { ...t },
            });
          function i(e) {
            r(e);
          }
          return (0, a.jsx)(T, {
            ...n,
            children: (0, a.jsx)("form", {
              onSubmit: n.handleSubmit(i),
              onBlur: n.handleSubmit(i),
              onChange: n.handleSubmit(i),
              className: "space-y-4",
              children: (0, a.jsxs)("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 gap-2 lg:flex flex-col",
                children: [
                  (0, a.jsx)(L, {
                    children: (0, a.jsx)(G, {
                      className: "pt-2",
                      children: (0, a.jsx)(P, {
                        control: n.control,
                        name: "principal",
                        render: (e) => {
                          let { field: t } = e;
                          return (0, a.jsxs)(Z, {
                            children: [
                              (0, a.jsx)(_, {
                                children: (0, a.jsxs)("span", {
                                  className: "text-lg font-semibold",
                                  children: [s("params.principal.title"), " "],
                                }),
                              }),
                              (0, a.jsx)(B, {
                                children: (0, a.jsx)(m, {
                                  ...t,
                                  autoComplete: "off",
                                }),
                              }),
                              (0, a.jsxs)(Y, {
                                children: [
                                  (0, a.jsx)(E.Z, {
                                    size: "16",
                                    className: "inline mr-1",
                                  }),
                                  s("params.principal.description"),
                                ],
                              }),
                              (0, a.jsx)(I, {}),
                            ],
                          });
                        },
                      }),
                    }),
                  }),
                  (0, a.jsx)(L, {
                    children: (0, a.jsxs)(G, {
                      className: "pt-2",
                      children: [
                        (0, a.jsx)(P, {
                          control: n.control,
                          name: "contribution.annual",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(Z, {
                              children: [
                                (0, a.jsx)(_, {
                                  children: (0, a.jsx)("span", {
                                    className: "text-lg font-semibold",
                                    children: s(
                                      "params.annual-contribution.title"
                                    ),
                                  }),
                                }),
                                (0, a.jsx)(B, {
                                  children: (0, a.jsx)(m, {
                                    ...t,
                                    autoComplete: "off",
                                  }),
                                }),
                                (0, a.jsxs)(Y, {
                                  children: [
                                    (0, a.jsx)(E.Z, {
                                      size: "16",
                                      className: "inline mr-1",
                                    }),
                                    s("params.annual-contribution.description"),
                                  ],
                                }),
                                (0, a.jsx)(I, {}),
                              ],
                            });
                          },
                        }),
                        (0, a.jsx)(P, {
                          control: n.control,
                          name: "contribution.frequency",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(Z, {
                              className: "mt-4",
                              children: [
                                (0, a.jsx)(_, {
                                  children: (0, a.jsx)("span", {
                                    className: "text-lg font-semibold",
                                    children: s(
                                      "params.contribution-every.title"
                                    ),
                                  }),
                                }),
                                (0, a.jsxs)(j, {
                                  onValueChange: t.onChange,
                                  defaultValue: t.value.toString(),
                                  children: [
                                    (0, a.jsx)(B, {
                                      children: (0, a.jsx)(b, {
                                        children: (0, a.jsx)(g, {}),
                                      }),
                                    }),
                                    (0, a.jsxs)(N, {
                                      children: [
                                        (0, a.jsx)(w, {
                                          value: "12",
                                          children: s("period.month"),
                                        }),
                                        (0, a.jsx)(w, {
                                          value: "4",
                                          children: s("period.quarter"),
                                        }),
                                        (0, a.jsx)(w, {
                                          value: "2",
                                          children: s("period.six-months"),
                                        }),
                                        (0, a.jsx)(w, {
                                          value: "1",
                                          children: s("period.year"),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)(Y, {
                                  children: [
                                    (0, a.jsx)(E.Z, {
                                      size: "16",
                                      className: "inline mr-1",
                                    }),
                                    s("params.contribution-every.description"),
                                  ],
                                }),
                                (0, a.jsx)(I, {}),
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(L, {
                    children: (0, a.jsxs)(G, {
                      className: "pt-2",
                      children: [
                        (0, a.jsx)(P, {
                          control: n.control,
                          name: "dividend.yield",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(Z, {
                              children: [
                                (0, a.jsx)(_, {
                                  children: (0, a.jsx)("span", {
                                    className: "text-lg font-semibold",
                                    children: s(
                                      "params.annual-dividend-yield.title"
                                    ),
                                  }),
                                }),
                                (0, a.jsx)(B, {
                                  children: (0, a.jsx)(m, {
                                    ...t,
                                    name: "dividend.yield",
                                    type: "number",
                                    autoComplete: "off",
                                  }),
                                }),
                                (0, a.jsxs)(Y, {
                                  children: [
                                    (0, a.jsx)(E.Z, {
                                      size: "16",
                                      className: "inline mr-1",
                                    }),
                                    s(
                                      "params.annual-dividend-yield.description"
                                    ),
                                  ],
                                }),
                                (0, a.jsx)(I, {}),
                              ],
                            });
                          },
                        }),
                        (0, a.jsx)(P, {
                          control: n.control,
                          name: "dividend.taxRate",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(Z, {
                              className: "mt-4",
                              children: [
                                (0, a.jsx)(_, {
                                  children: (0, a.jsx)("span", {
                                    className: "text-lg font-semibold",
                                    children: s(
                                      "params.dividend-tax-rate.title"
                                    ),
                                  }),
                                }),
                                (0, a.jsx)(B, {
                                  children: (0, a.jsx)(m, {
                                    ...t,
                                    name: "dividend.taxRate",
                                    type: "number",
                                    autoComplete: "off",
                                  }),
                                }),
                                (0, a.jsxs)(Y, {
                                  children: [
                                    (0, a.jsx)(E.Z, {
                                      size: "16",
                                      className: "inline mr-1",
                                    }),
                                    s("params.dividend-tax-rate.description"),
                                  ],
                                }),
                                (0, a.jsx)(I, {}),
                              ],
                            });
                          },
                        }),
                        (0, a.jsx)(P, {
                          control: n.control,
                          name: "dividend.frequency",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(Z, {
                              className: "mt-4",
                              children: [
                                (0, a.jsx)(_, {
                                  children: (0, a.jsx)("span", {
                                    className: "text-lg font-semibold",
                                    children: s(
                                      "params.dividend-frequency.title"
                                    ),
                                  }),
                                }),
                                (0, a.jsx)(B, {
                                  children: (0, a.jsxs)(j, {
                                    onValueChange: t.onChange,
                                    defaultValue: t.value.toString(),
                                    children: [
                                      (0, a.jsx)(B, {
                                        children: (0, a.jsx)(b, {
                                          children: (0, a.jsx)(g, {}),
                                        }),
                                      }),
                                      (0, a.jsxs)(N, {
                                        children: [
                                          (0, a.jsx)(w, {
                                            value: "12",
                                            children: s("period.month"),
                                          }),
                                          (0, a.jsx)(w, {
                                            value: "4",
                                            children: s("period.quarter"),
                                          }),
                                          (0, a.jsx)(w, {
                                            value: "2",
                                            children: s("period.six-months"),
                                          }),
                                          (0, a.jsx)(w, {
                                            value: "1",
                                            children: s("period.year"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsxs)(Y, {
                                  children: [
                                    (0, a.jsx)(E.Z, {
                                      size: "16",
                                      className: "inline mr-1",
                                    }),
                                    s("params.dividend-frequency.description"),
                                  ],
                                }),
                                (0, a.jsx)(I, {}),
                              ],
                            });
                          },
                        }),
                        (0, a.jsx)(P, {
                          control: n.control,
                          name: "dividend.reinvest",
                          render: (e) => {
                            let { field: t } = e;
                            return (0, a.jsxs)(Z, {
                              className: "mt-4",
                              children: [
                                (0, a.jsx)(_, {
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-row justify-between align-middle",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "text-lg font-semibold",
                                        children: s(
                                          "params.reinvest-dividends.title"
                                        ),
                                      }),
                                      (0, a.jsx)(J.C, {
                                        variant: "secondary",
                                        children: "DRIP",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)(B, {
                                  children: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(U, {
                                      checked: t.value,
                                      onCheckedChange: t.onChange,
                                    }),
                                  }),
                                }),
                                (0, a.jsxs)(Y, {
                                  children: [
                                    (0, a.jsx)(E.Z, {
                                      size: "16",
                                      className: "inline mr-1",
                                    }),
                                    s("params.reinvest-dividends.description"),
                                  ],
                                }),
                                (0, a.jsx)(I, {}),
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-2 ",
                    children: [
                      (0, a.jsx)(L, {
                        children: (0, a.jsx)(G, {
                          className: "pt-2",
                          children: (0, a.jsx)(P, {
                            control: n.control,
                            name: "annualPriceAppreciation",
                            render: (e) => {
                              let { field: t } = e;
                              return (0, a.jsxs)(Z, {
                                children: [
                                  (0, a.jsx)(_, {
                                    children: (0, a.jsx)("span", {
                                      className: "text-lg font-semibold",
                                      children: s(
                                        "params.annual-stock-price-appreciation.title"
                                      ),
                                    }),
                                  }),
                                  (0, a.jsx)(B, {
                                    children: (0, a.jsx)(m, {
                                      ...t,
                                      name: "annualPriceAppreciation",
                                      type: "number",
                                      autoComplete: "off",
                                    }),
                                  }),
                                  (0, a.jsxs)(Y, {
                                    children: [
                                      (0, a.jsx)(E.Z, {
                                        size: "16",
                                        className: "inline mr-1",
                                      }),
                                      s(
                                        "params.annual-stock-price-appreciation.description"
                                      ),
                                    ],
                                  }),
                                  (0, a.jsx)(I, {}),
                                ],
                              });
                            },
                          }),
                        }),
                      }),
                      (0, a.jsx)(L, {
                        children: (0, a.jsx)(G, {
                          className: "pt-2",
                          children: (0, a.jsx)(P, {
                            control: n.control,
                            name: "calculationYears",
                            render: (e) => {
                              let { field: t } = e;
                              return (0, a.jsxs)(Z, {
                                children: [
                                  (0, a.jsx)(_, {
                                    children: (0, a.jsx)("span", {
                                      className: "text-lg font-semibold",
                                      children: s(
                                        "params.calculation-years.title"
                                      ),
                                    }),
                                  }),
                                  (0, a.jsx)(B, {
                                    children: (0, a.jsx)(m, {
                                      ...t,
                                      name: "calculationYears",
                                      type: "number",
                                      autoComplete: "off",
                                    }),
                                  }),
                                  (0, a.jsxs)(Y, {
                                    children: [
                                      (0, a.jsx)(E.Z, {
                                        size: "16",
                                        className: "inline mr-1",
                                      }),
                                      s("params.calculation-years.description"),
                                    ],
                                  }),
                                  (0, a.jsx)(I, {}),
                                ],
                              });
                            },
                          }),
                        }),
                      }),
                      (0, a.jsx)(L, {
                        children: (0, a.jsx)(G, {
                          className: "p-0",
                          children: (0, a.jsx)(K.a, {
                            client: "ca-pub-4733788787541071",
                            slot: "9655026295",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var ee = r(89733),
        et = r(30338),
        er = () =>
          (0, a.jsxs)(L, {
            children: [
              (0, a.jsx)(V, {
                children: (0, a.jsx)("span", {
                  className:
                    "text-lg font-bold bg-gradient-to-r from-red-300 to-blue-800 bg-clip-text text-transparent",
                  children: "Looking to start your investment journey?",
                }),
              }),
              (0, a.jsx)(G, {
                children: (0, a.jsxs)("div", {
                  className: "flex flex-col justify-between gap-4",
                  children: [
                    (0, a.jsxs)("span", {
                      children: [
                        "Start investing with DEGIRO and receive a ",
                        (0, a.jsx)(J.C, {
                          variant: "default",
                          children: "€100",
                        }),
                        " transaction voucher to cover for the transaction costs in the first months!",
                      ],
                    }),
                    (0, a.jsx)(ee.z, {
                      asChild: !0,
                      children: (0, a.jsxs)("a", {
                        href: "/api/link?program=degiro",
                        target: "_blank",
                        children: [
                          "Open account ",
                          (0, a.jsx)(et.Z, { className: "ml-2" }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ea = (e) => {
          let { value: t } = e,
            r = (e) => null != e && "" !== e && !isNaN(Number(e.toString())),
            s = r(t)
              ? null == t
                ? void 0
                : t.toFixed(2).substr(0, t.toFixed(2).length - 3)
              : "",
            n = r(t) ? (null == t ? void 0 : t.toFixed(2).substr(-2)) : "",
            i = new Intl.NumberFormat().format(Number(s));
          return (0, a.jsxs)("span", {
            className: "",
            children: [
              (0, a.jsx)("span", { className: "font-semibold", children: i }),
              (0, a.jsx)("span", {
                className: "font-light ml-1 text-sm",
                children: n,
              }),
            ],
          });
        },
        es = r(41270);
      let en = (e) => {
        let { name: t, value: r, percent: s } = e;
        return (0, a.jsx)(L, {
          children: (0, a.jsxs)(V, {
            children: [
              (0, a.jsx)(A, { children: t }),
              (0, a.jsxs)(O, {
                className: "text-4xl",
                children: [
                  s &&
                    (0, a.jsx)(es.BK, {
                      value: s,
                      style: "percent",
                      minimumFractionDigits: 2,
                    }),
                  r && (0, a.jsx)(ea, { value: r }),
                ],
              }),
            ],
          }),
        });
      };
      var ei = r(11938),
        el = r.n(ei),
        eo = r(79512),
        ed = r(52064),
        ec = {
          50: "#f4f7fb",
          100: "#e8edf6",
          200: "#cddbea",
          300: "#a0bbd9",
          400: "#6d98c3",
          500: "#5585b5",
          600: "#396290",
          700: "#2f4f75",
          800: "#2a4362",
          900: "#273b53",
          950: "#1a2637",
        },
        eu = (e) => {
          let { params: t, results: r } = e,
            s = (0, X.useTranslations)("Calculator"),
            { resolvedTheme: n } = (0, eo.F)(),
            i = (e) => {
              switch (e) {
                case "principal":
                  return s("principal");
                case "cumulativeContributions":
                  return s("contributions");
                case "cumulativeGrowth":
                  return s("growth");
                case "cumulativeDividends":
                  return s("dividends");
                case "cumulativeTax":
                  return s("tax");
              }
              return "";
            };
          return (0, a.jsx)(L, {
            children: (0, a.jsx)(G, {
              children: (0, a.jsx)("div", {
                className: "h-[32rem]",
                children: (0, a.jsx)(ed.jM, {
                  data: r.yearlyResults,
                  keys: [
                    "principal",
                    "cumulativeContributions",
                    "cumulativeGrowth",
                    "cumulativeDividends",
                  ],
                  enableLabel: !1,
                  legendLabel: (e) => i(e.id),
                  tooltipLabel: (e) => i(e.id),
                  indexBy: "year",
                  margin: { top: 50, right: 0, bottom: 80, left: 60 },
                  padding: 0.25,
                  valueScale: { type: "linear" },
                  indexScale: { type: "band", round: !0 },
                  valueFormat: " >-,.2f",
                  colors: [ec[800], ec[700], ec[600], ec[400]],
                  fill: [
                    { match: { id: "principal" }, id: "dots" },
                    { match: { id: "cumulativeContributions" }, id: "lines" },
                  ],
                  borderColor: { theme: "background" },
                  axisTop: null,
                  axisRight: null,
                  axisBottom: {
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: s("year"),
                    legendPosition: "middle",
                    legendOffset: 33,
                  },
                  axisLeft: {
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: -20,
                    legend: "",
                    legendPosition: "middle",
                    legendOffset: 0,
                    format: function (e) {
                      return new Intl.NumberFormat().format(Number(e));
                    },
                  },
                  labelSkipHeight: 11,
                  labelTextColor: {
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  },
                  legends: [
                    {
                      dataFrom: "keys",
                      anchor: "bottom",
                      direction: "row",
                      justify: !1,
                      translateX: 0,
                      translateY: 62,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemsSpacing: 40,
                      symbolSize: 18,
                      itemDirection: "left-to-right",
                    },
                  ],
                  role: "application",
                  theme: {
                    tooltip: {
                      container: {
                        background: "dark" === n ? "#333" : "#fff",
                        color: "dark" === n ? "#fff" : "#000",
                        fontFamily: el().style.fontFamily,
                        fontWeight: el().style.fontWeight,
                        fontStyle: el().style.fontStyle,
                      },
                    },
                    text: { color: "#fff" },
                    grid: { line: { stroke: "#888", strokeWidth: 0.25 } },
                    axis: {
                      legend: {
                        text: {
                          fill: "dark" === n ? "#fff" : "#000",
                          fontSize: 14,
                          fontFamily: el().style.fontFamily,
                          fontWeight: el().style.fontWeight,
                          fontStyle: el().style.fontStyle,
                        },
                      },
                      ticks: {
                        text: {
                          fill: "dark" === n ? "#fff" : "#000",
                          fontSize: 14,
                          fontFamily: el().style.fontFamily,
                          fontWeight: el().style.fontWeight,
                          fontStyle: el().style.fontStyle,
                        },
                      },
                    },
                    legends: {
                      text: {
                        fill: "dark" === n ? "#fff" : "#000",
                        fontSize: 14,
                        fontFamily: el().style.fontFamily,
                        fontWeight: el().style.fontWeight,
                        fontStyle: el().style.fontStyle,
                      },
                    },
                  },
                }),
              }),
            }),
          });
        },
        em = r(59528),
        ef = r.n(em),
        ex = (e) => {
          let { params: t, results: r } = e,
            s = (0, X.useTranslations)("Calculator"),
            { resolvedTheme: n } = (0, eo.F)(),
            i = (e) =>
              "averageMonthlyDividend" === e ? s("average-monthly-income") : "";
          return (0, a.jsx)(L, {
            children: (0, a.jsx)(G, {
              children: (0, a.jsx)("div", {
                className: "h-[32rem]",
                children: (0, a.jsx)(ed.jM, {
                  data: r.yearlyResults,
                  keys: ["averageMonthlyDividend"],
                  enableLabel: !1,
                  legendLabel: (e) => i(e.id),
                  tooltipLabel: (e) => i(e.id),
                  indexBy: "year",
                  margin: { top: 50, right: 0, bottom: 80, left: 60 },
                  padding: 0.25,
                  valueScale: { type: "linear" },
                  indexScale: { type: "band", round: !0 },
                  valueFormat: " >-,.2f",
                  colors: [ec[400]],
                  fill: [
                    { match: { id: "principal" }, id: "dots" },
                    { match: { id: "cumulativeContributions" }, id: "lines" },
                  ],
                  borderColor: { theme: "background" },
                  axisTop: null,
                  axisRight: null,
                  axisBottom: {
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Year",
                    legendPosition: "middle",
                    legendOffset: 33,
                  },
                  axisLeft: {
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: -20,
                    legend: "",
                    legendPosition: "middle",
                    legendOffset: 0,
                    format: function (e) {
                      return new Intl.NumberFormat().format(Number(e));
                    },
                  },
                  labelSkipHeight: 11,
                  labelTextColor: {
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  },
                  legends: [
                    {
                      dataFrom: "keys",
                      anchor: "bottom",
                      direction: "row",
                      justify: !1,
                      translateX: 0,
                      translateY: 62,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemsSpacing: 40,
                      symbolSize: 18,
                      itemDirection: "left-to-right",
                    },
                  ],
                  role: "application",
                  ariaLabel: "Chart",
                  barAriaLabel: (e) =>
                    e.id +
                    ": " +
                    e.formattedValue +
                    " in country: " +
                    e.indexValue,
                  theme: {
                    tooltip: {
                      container: {
                        background: "dark" === n ? "#333" : "#fff",
                        color: "dark" === n ? "#fff" : "#000",
                        fontFamily: ef().style.fontFamily,
                        fontWeight: ef().style.fontWeight,
                        fontStyle: ef().style.fontStyle,
                      },
                    },
                    text: { color: "#fff" },
                    grid: { line: { stroke: "#888", strokeWidth: 0.25 } },
                    axis: {
                      legend: {
                        text: {
                          fill: "dark" === n ? "#fff" : "#000",
                          fontSize: 14,
                          fontFamily: ef().style.fontFamily,
                          fontWeight: ef().style.fontWeight,
                          fontStyle: ef().style.fontStyle,
                        },
                      },
                      ticks: {
                        text: {
                          fill: "dark" === n ? "#fff" : "#000",
                          fontSize: 14,
                          fontFamily: ef().style.fontFamily,
                          fontWeight: ef().style.fontWeight,
                          fontStyle: ef().style.fontStyle,
                        },
                      },
                    },
                    legends: {
                      text: {
                        fill: "dark" === n ? "#fff" : "#000",
                        fontSize: 14,
                        fontFamily: ef().style.fontFamily,
                        fontWeight: ef().style.fontWeight,
                        fontStyle: ef().style.fontStyle,
                      },
                    },
                  },
                }),
              }),
            }),
          });
        };
      let eh = (e) => {
          let { params: t, results: r } = e,
            s = (0, X.useTranslations)("Calculator");
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: "flex flex-col gap-8 h-full",
              children: [
                (0, a.jsx)("div", {
                  className: "text-center font-semibold mt-8 text-3xl",
                  children: s("summary-result", { years: t.calculationYears }),
                }),
                (0, a.jsx)("div", {
                  className: "text-center text-3xl py-2",
                  children: (0, a.jsx)("strong", {
                    className:
                      "bg-primary-50 text-4xl font-bold px-2.5 py-1.5 rounded border border-primary-400 bg-gradient-to-br from-sky-700 to-indigo-400 text-transparent bg-clip-text",
                    children: (0, a.jsx)(ea, { value: r.finalBalance }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    (0, a.jsx)(en, {
                      name: s("total-return"),
                      percent: r.totalReturnPercent,
                    }),
                    (0, a.jsx)(en, {
                      name: s("average-annual-return"),
                      percent: r.averageAnnualReturnPercent,
                    }),
                  ],
                }),
                (0, a.jsx)("h3", {
                  className:
                    "scroll-m-20 text-2xl font-semibold tracking-tight",
                  children: s("breakdown"),
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
                  children: [
                    (0, a.jsx)(en, {
                      name: s("principal"),
                      value: r.principal,
                    }),
                    (0, a.jsx)(en, {
                      name: s("contributions"),
                      value: r.totalContributions,
                    }),
                    (0, a.jsx)(en, {
                      name: s("dividends"),
                      value: r.totalDividends,
                    }),
                    (0, a.jsx)(en, { name: s("growth"), value: r.totalGrowth }),
                  ],
                }),
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(K.a, {
                    client: "ca-pub-4733788787541071",
                    slot: "7772966975",
                  }),
                }),
                (0, a.jsx)("h3", {
                  className:
                    "scroll-m-20 text-2xl font-semibold tracking-tight",
                  children: s("cumulative-return-chart"),
                }),
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(eu, { params: t, results: r }),
                }),
                (0, a.jsx)("h3", {
                  className:
                    "scroll-m-20 text-2xl font-semibold tracking-tight",
                  children: s("average-monthly-income"),
                }),
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(ex, { params: t, results: r }),
                }),
              ],
            }),
          });
        },
        ep = s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)("div", {
            className: "relative w-full overflow-auto",
            children: (0, a.jsx)("table", {
              ref: t,
              className: (0, u.cn)("w-full caption-bottom text-sm", r),
              ...s,
            }),
          });
        });
      ep.displayName = "Table";
      let ej = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("thead", {
          ref: t,
          className: (0, u.cn)("[&_tr]:border-b", r),
          ...s,
        });
      });
      ej.displayName = "TableHeader";
      let eg = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("tbody", {
          ref: t,
          className: (0, u.cn)("[&_tr:last-child]:border-0", r),
          ...s,
        });
      });
      (eg.displayName = "TableBody"),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)("tfoot", {
            ref: t,
            className: (0, u.cn)(
              "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
              r
            ),
            ...s,
          });
        }).displayName = "TableFooter");
      let eb = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("tr", {
          ref: t,
          className: (0, u.cn)(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            r
          ),
          ...s,
        });
      });
      eb.displayName = "TableRow";
      let ev = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("th", {
          ref: t,
          className: (0, u.cn)(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            r
          ),
          ...s,
        });
      });
      ev.displayName = "TableHead";
      let ey = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, a.jsx)("td", {
          ref: t,
          className: (0, u.cn)(
            "p-4 align-middle [&:has([role=checkbox])]:pr-0",
            r
          ),
          ...s,
        });
      });
      (ey.displayName = "TableCell"),
        (s.forwardRef((e, t) => {
          let { className: r, ...s } = e;
          return (0, a.jsx)("caption", {
            ref: t,
            className: (0, u.cn)("mt-4 text-sm text-muted-foreground", r),
            ...s,
          });
        }).displayName = "TableCaption");
      let eN = (e) => {
        let { results: t } = e,
          r = (0, X.useTranslations)("Calculator");
        return (0, a.jsx)("div", {
          className: "max-h-96 overflow-auto rounded-lg",
          children: (0, a.jsxs)(ep, {
            children: [
              (0, a.jsx)(ej, {
                children: (0, a.jsxs)(eb, {
                  children: [
                    (0, a.jsx)(ev, { children: r("year") }),
                    (0, a.jsx)(ev, {
                      className: "text-right",
                      children: r("balance"),
                    }),
                    (0, a.jsx)(ev, {
                      className: "text-right",
                      children: r("annual-dividends"),
                    }),
                    (0, a.jsx)(ev, {
                      className: "text-right",
                      children: r("dividends-tax"),
                    }),
                    (0, a.jsx)(ev, {
                      className: "text-right",
                      children: r("growth"),
                    }),
                    (0, a.jsx)(ev, {
                      className: "text-right",
                      children: r("new-balance"),
                    }),
                    (0, a.jsx)(ev, {
                      className: "text-right",
                      children: r("return"),
                    }),
                    (0, a.jsx)(ev, {
                      className: "text-right",
                      children: r("return-percent"),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(eg, {
                children: t.yearlyResults.map(function (e, t) {
                  return (0,
                  a.jsxs)(eb, { children: [(0, a.jsx)(ey, { children: e.year }), (0, a.jsx)(ey, { className: "text-right", children: (0, a.jsx)(ea, { value: e.startingBalance }) }), (0, a.jsx)(ey, { className: "text-right", children: (0, a.jsx)(ea, { value: e.dividends }) }), (0, a.jsx)(ey, { className: "text-right", children: (0, a.jsx)(ea, { value: e.dividendsTax }) }), (0, a.jsx)(ey, { className: "text-right", children: (0, a.jsx)(ea, { value: e.growth }) }), (0, a.jsx)(ey, { className: "text-right", children: (0, a.jsx)(ea, { value: e.newBalance }) }), (0, a.jsx)(ey, { className: "text-right", children: (0, a.jsx)(ea, { value: e.returns }) }), (0, a.jsx)(ey, { className: "text-right", children: (0, a.jsx)(es.BK, { style: "percent", value: e.returnPercent, minimumFractionDigits: 2 }) })] }, e.year);
                }),
              }),
            ],
          }),
        });
      };
      var ew = r(61883);
      let ek = () => {
        let e = (0, X.useTranslations)("Calculator");
        return (0, a.jsx)("section", {
          children: (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("h2", {
                className:
                  "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                children: e("faq.title"),
              }),
              (0, a.jsx)("div", {
                className:
                  "grid pt-8 text-left border-t gap-x-4 gap-y-2 grid-cols-2 border-gray-200 dark:border-gray-700 ",
                children: [
                  "faq.questions.question1",
                  "faq.questions.question2",
                  "faq.questions.question3",
                  "faq.questions.question4",
                  "faq.questions.question5",
                  "faq.questions.question6",
                  "faq.questions.question7",
                  "faq.questions.question8",
                  "faq.questions.question9",
                  "faq.questions.question10",
                  "faq.questions.question11",
                  "faq.questions.question12",
                  "faq.questions.question13",
                  "faq.questions.question14",
                  "faq.questions.question15",
                ].map((t) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: "mb-10 ",
                      children: [
                        (0, a.jsxs)("h3", {
                          className:
                            "flex  align-top scroll-m-20 text-2xl font-semibold tracking-tight",
                          children: [
                            (0, a.jsx)(ew.Z, { className: "mr-2 h-8 w-8" }),
                            e("".concat(t, ".question")),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "text-gray-500 dark:text-gray-400",
                          children: e("".concat(t, ".answer")),
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      };
      var eq = r(64278);
      let eC = () => {
        let e = (0, X.useTranslations)("Calculator"),
          [t, r] = (0, s.useState)(o),
          [n, l] = (0, s.useState)(i(t)),
          u = d(t, 250),
          m = (0, c.U0)();
        return (
          (0, s.useEffect)(() => {
            eq.start(),
              fetch("/api/calculator", {
                method: "POST",
                body: JSON.stringify(u),
              })
                .then((e) => e.json())
                .then((e) => l(e))
                .then(() => m.capture("calculation", { params: { ...u } }))
                .then(() => eq.done());
          }, [u]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("h1", {
                className: "size-0",
                children: "Dividend calculator",
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col lg:flex-row gap-4 xl:gap-8",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex-none max-w-full lg:max-w-[350px] xl:max-w-[496px]",
                    children: [
                      (0, a.jsx)(Q, { params: t, setParams: r }),
                      (0, a.jsx)("div", {
                        className: "mt-2",
                        children: (0, a.jsx)(er, {}),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "grow",
                    children: (0, a.jsx)(eh, { params: t, results: n }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-8 mt-8",
                children: [
                  (0, a.jsx)("h3", {
                    className:
                      "scroll-m-20 text-2xl font-semibold tracking-tight",
                    children: e("breakdown-per-year"),
                  }),
                  (0, a.jsx)(eN, { results: n }),
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(K.a, {
                      client: "ca-pub-4733788787541071",
                      slot: "8300817687",
                    }),
                  }),
                  (0, a.jsx)("div", { children: (0, a.jsx)(ek, {}) }),
                ],
              }),
            ],
          })
        );
      };
    },
    49354: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return n;
        },
      });
      var a = r(44839),
        s = r(96164);
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.m6)((0, a.W)(t));
      }
    },
  },
  function (e) {
    e.O(0, [757, 405, 844, 971, 23, 744], function () {
      return e((e.s = 29450));
    }),
      (_N_E = e.O());
  },
]);
