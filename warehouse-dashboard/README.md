# Warehouse daily ops dashboard

KPI and safety dashboard for receiving, picking, returns and safety.
`index.html` is the dashboard page; the CSV files in `data/` are the sheets it
reads. Receiving (VIC) and picking (all warehouses) are real figures; returns
and safety are **sample data** until real sheets are supplied.

## Data sheets

### `data/vic_receiving_week.csv` — VIC weekly receiving sheet (real data)

One row per day, same measures as the VIC WH weekly reporting sheet:
containers delivered / unloaded (PO and ST), discrepancies, containers sent
out, SKUs, pallets used, people unloading, unloading man-hours, CBM, boxes,
unloaded on receiving date, random box checks, container detention, pallets
left behind.

KPIs worked out from it:

| KPI | Rule | Target |
| --- | --- | --- |
| Man-hours per container | unloading hours ÷ containers unloaded | 14 or less |
| Random box checks | checks ÷ (SKUs × 3) | 100% |
| PO & ST discrepancy accuracy | 1 − discrepancies ÷ containers unloaded | 99.5% |
| Unloaded on receiving date | days = Yes | every day |
| Pallets left behind / detention | days = Yes | 0 days |

Not on the sheet yet (add rows with hours to score them): pallets fed
(feeder), pallets put away, pallet labels printed, pallets QC'd, pallets built.

### `data/picking_sep_2026.csv` — Task User Report, 1–30 Sep 2026 (real data)

`warehouse, picker, boxes, bins, pickrate` (boxes per picking hour) for VIC,
NSW, QLD and WA. MMS and Abadan system accounts are removed and pickers are
shown by ID, not name. VIC has 20 of 23 rows (page 2 was not supplied).
Picking hours = boxes ÷ pick rate; target 25 boxes/hr (assumed); pickers with
fewer than 50 boxes are not scored.

### `data/returns_daily.csv` (sample) — boxes returned per day by reason

`date, reason, boxes`

### `data/safety_daily.csv` (sample) — one row per day

`date, lost_time_injuries, first_aid_cases, near_misses, unsafe_acts,
forklift_checks_done, forklift_checks_required, ppe_audit_pct,
housekeeping_score (1–5), toolbox_talk (Yes/No)`

Six daily standards are scored: 0 lost-time injuries, 0 first aid cases, all
forklift pre-start checks done, PPE audit ≥ 95%, housekeeping ≥ 4, toolbox talk
held. Near misses and unsafe acts are tracked but not scored, so reporting is
not discouraged.

### `data/safety_log.csv` (sample) — incidents and observations

`id, date, area, type, description, action, status (Open/Closed)`

Types used: `Lost-time injury`, `First aid`, `Near miss`, `Unsafe act`,
`Property damage`.

## Daily Ops Log (`ops-log.html`)

Data-entry page that saves one record per warehouse per date (`days/<date>_<warehouse>`
in the page's database): receiving (VIC weekly-sheet rows plus palletizing,
labels, QC, feeder and putaway), dispatch and replenishment, pickers pasted from
the Task User Report (MMS and Abadan skipped), returns by reason, and safety.
Every saved day is scored against shared, editable targets.
