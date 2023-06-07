import openai
import os

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv())

openai.api_key  = os.getenv('OPENAI_API_KEY')

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]


# print(os.getenv('OPENAI_API_KEY'))
text = f"""
У попа была собака, он ее любил. Она съела кусок мяса — он ее убил. В землю закопал, надпись написал
"""
prompt = f"""
Придумай что было дальше.
```{text}```
"""
response = get_completion(prompt)
print(response)