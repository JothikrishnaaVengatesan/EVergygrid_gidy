def mppt_optimize(solar_voltage, wind_voltage):
    optimal_power = max(solar_voltage * 0.95, wind_voltage * 0.90)
    return optimal_power