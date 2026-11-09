# Example site context (fictional data for validating the warehouse-manager agent)

- Site: ambient-only DC, no chilled, food, pharma or dangerous goods.
- Storage: selective pallet racking, max 1,000 kg and 1.6 m pallet height per location; receiving floor zone `RCV-FLOOR`; putaway staging `STG-01` (capacity 20 pallets).
- Pallet IDs: internal LPNs (`LPN` + 6 digits). GS1 SSCC is NOT used.
- "Feeding" = moving QC-accepted pallets from `RCV-FLOOR` to `STG-01`.
- WMS status flow (receiving): RECEIVED -> QC_ACCEPTED / QC_HOLD / QC_REJECTED -> FED -> PUTAWAY_CONFIRMED (stock AVAILABLE).
- WMS status flow (dispatch): RELEASED -> ALLOCATED -> PICKED -> PACKED -> LOADED -> SHIPPED. Deduction timing for this WMS has not been confirmed by IT.
- Carrier cut-off: 16:00 daily. Shift 06:00-14:30, 8 pickers.
- Approved procedure: QC result is a mandatory release gate; replenishment must complete before a wave is released.
