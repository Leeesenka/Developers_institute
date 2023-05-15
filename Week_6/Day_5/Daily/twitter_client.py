import requests
import argparse

def get_latest_stock_feedback(bearer_token):
    headers = {
        "Authorization": f"Bearer {bearer_token}",
        "User-Agent": "v2RecentTweetsPython"
    }

    # Make a request to the Twitter API v2
    response = requests.get(
        "https://api.twitter.com/2/users/LeeesenkaF1651847196269064192/tweets",
        headers=headers
    )

    if response.status_code == 200:
        data = response.json()["data"]
        for tweet in data:
            text = tweet["text"]
            created_at = tweet["created_at"]
            username = tweet["author_id"]

            print(f"{username} ({created_at}): {text}\n")
    else:
        print("Error occurred while fetching tweets.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Python Twitter Client")
    parser.add_argument("--twitter", action="store_true", help="Enable Twitter feed")
    parser.add_argument("--bearer-token", help="Twitter API bearer token")

    args = parser.parse_args()

    if args.twitter:
        bearer_token = args.bearer_token

        get_latest_stock_feedback(bearer_token)
    else:
        print("Twitter feed option not provided.")
