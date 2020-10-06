import matplotlib.pyplot as plt
import pandas as pd
from traitsui.api import Item, View

df = pd.read_csv("US_Accidents_Dec19.csv")

print(df)
from traitsui.api import View, Item
from traits.api import HasTraits, Instance, on_trait_change