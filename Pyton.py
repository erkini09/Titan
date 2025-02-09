import pandas as pd

# Load the dataset
file_path = 'path_to_your_dataset.csv'
df = pd.read_csv(file_path)

# Display the first few rows of the dataset
print("First few rows of the dataset:")
print(df.head())

# Summary statistics of the dataset
print("\nSummary statistics of the dataset:")
print(df.describe())

# Check for missing values
print("\nMissing values in each column:")
print(df.isnull().sum())

# Data type of each column
print("\nData types of each column:")
print(df.dtypes)

# Drop rows with missing values
df_cleaned = df.dropna()

# Example analysis: Group by a specific column and calculate mean of another column
# Replace 'group_column' and 'value_column' with actual column names from your dataset
grouped_data = df_cleaned.groupby('group_column')['value_column'].mean()
print("\nMean values grouped by 'group_column':")
print(grouped_data)

# Example analysis: Count occurrences of unique values in a column
# Replace 'category_column' with an actual column name from your dataset
value_counts = df_cleaned['category_column'].value_counts()
print("\nValue counts in 'category_column':")
print(value_counts)

# Example analysis: Correlation matrix
print("\nCorrelation matrix:")
print(df_cleaned.corr())

# Save the cleaned dataset to a new CSV file
output_file_path = 'cleaned_dataset.csv'
df_cleaned.to_csv(output_file_path, index=False)
print(f"\nCleaned dataset saved to {output_file_path}")