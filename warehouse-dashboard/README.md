# Warehouse daily ops dashboard

Daily KPI and safety dashboard for receiving, dispatch, returns and safety.
`index.html` is the dashboard page; the four CSV files in `data/` are the daily
sheets it reads. The figures in them are **sample data** — replace them with
your own each day.

## Daily sheets

### `data/ops_daily.csv` — one row per KPI per day

| column | meaning |
| --- | --- |
| `date` | Shift date, `YYYY-MM-DD` |
| `area` | `Receiving` or `Dispatch` |
| `kpi_id` | Fixed id, see the KPI list below |
| `step` | Order of the step in the area's flow |
| `activity` / `kpi` / `unit` | Labels shown on the card |
| `qty` | Units done that day (containers, boxes, pallets, labels, CBM) |
| `hours` | Hours worked on that activity |
| `crew` | People on that activity (replenishment is always 2) |
| `target_per_hr` | Team target per hour |

Rate = `qty / hours`. The KPI is **hit** when the rate is at or above
`target_per_hr`. Per-person rate = rate / crew.

| kpi_id | Area | Activity | KPI | Sample target |
| --- | --- | --- | --- | --- |
| `rec_unload_cont` | Receiving | Unloading | Containers/hr | 0.6 |
| `rec_unload_box` | Receiving | Unloading | Boxes/hr | 750 |
| `rec_palletize` | Receiving | Palletizing | Pallets/hr | 28 |
| `rec_label` | Receiving | Pallet labels | Labels/hr | 30 |
| `rec_qc` | Receiving | QC | Pallets checked/hr | 30 |
| `rec_feeder` | Receiving | Feeder | Pallets/hr | 28 |
| `rec_putaway` | Receiving | Putaway | Pallets/hr | 26 |
| `disp_box` | Dispatch | Dispatch | Boxes/hr | 950 |
| `disp_cbm` | Dispatch | Dispatch | CBM/hr | 45 |
| `disp_replen` | Dispatch | Replenishment | Pallets/hr (2 replenishers) | 20 |

### `data/returns_daily.csv` — boxes returned per day by reason

`date, reason, boxes`

### `data/safety_daily.csv` — one row per day

`date, lost_time_injuries, first_aid_cases, near_misses, unsafe_acts,
forklift_checks_done, forklift_checks_required, ppe_audit_pct,
housekeeping_score (1–5), toolbox_talk (Yes/No)`

Six daily standards are scored: 0 lost-time injuries, 0 first aid cases, all
forklift pre-start checks done, PPE audit ≥ 95%, housekeeping ≥ 4, toolbox talk
held. Near misses and unsafe acts are tracked but not scored, so reporting is
not discouraged.

### `data/safety_log.csv` — incidents and observations

`id, date, area, type, description, action, status (Open/Closed)`

Types used: `Lost-time injury`, `First aid`, `Near miss`, `Unsafe act`,
`Property damage`.
