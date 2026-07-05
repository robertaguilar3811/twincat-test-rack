# TwinCAT Test Rack

A TwinCAT 3 motion control test rack for developing and validating PLC motion code. Built on a physical rack with real drives and encoders, used as a development platform before deploying to production machines.

## Hardware

- Beckhoff IPC running TwinCAT 3
- 3-axis stepper/servo drive configuration
- Encoder feedback on each axis
- Panel lights (green, orange, red) for status indication
- 3 physical switches for operator input (E-stop, start, reset)

## Software

- **TwinCAT 3** (v3.1.4024.16)
- **TC2_MC2** — PLCopen motion control library
- **TwinCAT HMI** — operator interface

## Project Structure

```
PLC/
├── POUs/
│   ├── MAIN.TcPOU               - Main program, state machine, test runner
│   └── FB_MotorControl.TcPOU    - Motor control function block
├── DUTs/
│   ├── ST_MotorParameters.TcDUT - Motor parameter struct
│   └── E_ControlMode.TcDUT      - Position / velocity mode enum
└── GVLs/
    ├── GVL_MotorControl.TcGVL   - Global constants (CNUM_AXIS = 3)
    └── GVL_Safety.TcGVL         - Safety-related globals
```

## Architecture

### State machine (MAIN)

| State | Description |
|-------|-------------|
| 0     | Idle        |
| 10    | Homing      |
| 20    | Ready       |
| 30    | Running test |
| 40    | Error       |
| 999   | E-stop      |

### FB_MotorControl

Wraps PLCopen motion function blocks into a single interface per axis. Accepts commands via `ST_MotorParameters` and reports back position, velocity, and state.

**Control modes:**
- `E_ControlMode.POSITION` — absolute/relative moves
- `E_ControlMode.VELOCITY` — continuous velocity moves, jog

### Switch mapping

| Switch | Function |
|--------|----------|
| sw1    | E-stop   |
| sw2    | Start test / advance state |
| sw3    | Reset from error |

### Light mapping

| Light  | State |
|--------|-------|
| Green  | Ready (20) |
| Orange | Homing (10) or Running (30) |
| Red    | Error (40) or E-stop (999) |

## Tests

### Multi-axis simultaneous move
Launches all axes simultaneously to independent target positions, waits for all to reach standstill, verifies position within tolerance, then returns all axes home.

Demonstrates:
- Simultaneous axis coordination
- Position verification with tolerance checking
- Fault detection mid-sequence
- Scalable design via `CNUM_AXIS` constant

## Getting Started

1. Open `TwinCAT-Test-Rack.sln` in TwinCAT XAE
2. Activate configuration and set to run mode
3. Download PLC to target
4. Use HMI or sw2 to start from state 0

## Requirements

- TwinCAT 3.1 Build 4024 or later
- TC2_MC2 license
- TwinCAT HMI license (for HMI pages)
